JD Talos App
===================

To create a user send a `POST` request to `[appURL]:[appPort]/api/auth/signup`, body should contain:
```
{
	"email": String
	"password": String,
	"roles": Array of String
}
```
