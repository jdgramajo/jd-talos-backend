JD Talos Backend App
====================

An Insomnia rest client export file for ease of usage is provided as `Insomnia_export_JD_Talos_backend.json` in the root of this repo. However, a brief walktrhough follows.

To create a user send a `POST` request to `[appURL]:[appPort]/api/auth/signup`, body should contain:
```
{
	"email": String
	"password": String,
	"roles": Array of String values including "admin" or "user"
}
```

Get a valid `x-access-token` (that will be valid for _one_ minute) by sending a `POST` request to `[appURL]:[appPort]/api/auth/signin` with a body of:
```
{
	"email": String existing email
	"password": String corresponding pwd
}
```

To create a book *(only admin tokens have authorization to do so)* send a `POST` request to the `[appURL]:[appPort]/book` endpoint with the `x-access-token` header with a valid admin token as value and a body of:
```
{
	"title": String
	"categories": Array of String values including "fiction", "fantasy", or "novel"
}
```

To list all books *(only valid tokens for a user or admin may do so)* send a `GET` request to the `[appURL]:[appPort]/book` endpoint with a valid token value for the `x-access-token` header key.
