import json
from datetime import datetime, timedelta

from cryptography.hazmat.primitives import hashes
from cryptography.hazmat.primitives.kdf.hkdf import HKDF
from fastapi import HTTPException, Security
from fastapi.security import APIKeyHeader
from jose import jwe
from jose.exceptions import JWEError
from loguru import logger
from oasst_inference_server.settings import settings
from starlette.status import HTTP_400_BAD_REQUEST, HTTP_401_UNAUTHORIZED, HTTP_403_FORBIDDEN

oauth2_scheme = APIKeyHeader(name="Authorization", auto_error=False)
refresh_scheme = APIKeyHeader(name="Refresh", auto_error=False)


def derive_key() -> bytes:
    """Derive a key from the auth secret."""
    hkdf = HKDF(
        algorithm=hashes.SHA256(),
        length=settings.auth_length,
        salt=settings.auth_salt,
        info=settings.auth_info,
    )
    key = hkdf.derive(settings.auth_secret)
    return key


def create_access_token(user_id: str) -> str:
    """Create encoded JSON Web Token (JWT) for the given user ID."""
    expires_delta = timedelta(minutes=settings.auth_access_token_expire_minutes)
    expire = datetime.utcnow() + expires_delta

    to_encode = {
        "user_id": user_id,
        "exp": expire.timestamp(),
        "type": "access",
    }

    # Generate a key from the auth secret
    key = derive_key()

    # Encrypt the payload using JWE
    to_encode_bytes: bytes = json.dumps(to_encode).encode()
    token: bytes = jwe.encrypt(to_encode_bytes, key)
    return token.decode()


def create_refresh_token(user_id: str) -> str:
    """Create encoded refresh token for the given user ID."""
    expires_delta = timedelta(minutes=settings.auth_refresh_token_expire_minutes)
    expire = datetime.utcnow() + expires_delta

    to_encode = {
        "user_id": user_id,
        "exp": expire.timestamp(),
        "type": "refresh",
    }

    # Generate a key from the auth secret
    key = derive_key()

    # Encrypt the payload using JWE
    to_encode_bytes: bytes = json.dumps(to_encode).encode()
    token: bytes = jwe.encrypt(to_encode_bytes, key)
    return token.decode()


def get_current_user_id(token: str = Security(oauth2_scheme)) -> str:
    """Get the current user ID by decoding the JWT token."""
    if token is None or not token.startswith("Bearer "):
        logger.warning(f"Invalid token: {token}")
        raise HTTPException(status_code=HTTP_403_FORBIDDEN, detail="Not authenticated")

    token = token[len("Bearer ") :]
    if not token:
        logger.warning(f"Invalid token: {token}")
        raise HTTPException(status_code=HTTP_403_FORBIDDEN, detail="Not authenticated")

    # Generate a key from the auth secret
    key: bytes = derive_key()

    # Decrypt the JWE token
    try:
        token: bytes = jwe.decrypt(token, key)
    except JWEError:
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail="Invalid token")

    payload: dict = json.loads(token.decode())
    user_id = payload.get("user_id")
    exp = payload.get("exp")

    if not user_id or not exp:
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail="Invalid token")
    if datetime.utcnow() >= datetime.fromtimestamp(exp):
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail="Token expired")

    return user_id


def refresh_access_token(refresh_token: str) -> str:
    """Refresh the access token using the given refresh token."""
    # Generate a key from the auth secret
    key: bytes = derive_key()

    # Decrypt the JWE token
    try:
        token: bytes = jwe.decrypt(refresh_token, key)
    except JWEError:
        raise HTTPException(status_code=HTTP_401_UNAUTHORIZED, detail="Invalid token")

    payload: dict = json.loads(token.decode())

    if payload["type"] != "refresh":
        raise HTTPException(status_code=HTTP_400_BAD_REQUEST, detail="Invalid token type")

    return create_access_token(payload["user_id"])
