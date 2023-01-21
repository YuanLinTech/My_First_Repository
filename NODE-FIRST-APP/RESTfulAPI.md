RESTful API Design Guidelines

1. Versioning
    example.com/v1
    example.com/api/v1
    api.example.com/v1
    api.example.com/v2

2. Use plural nouns to describe resources
    /v1/news
    /v1/users

3. Use appropriate HTTP methods, for example:
Clients use GET to access resources, while they use POST to send data to the server 
and PUT to update resources on the server.

4. Can use nested structure for URL
posts {
    comments
}
GET /v1/posts/:postId/comments
GET /v1/posts/{postId}/comments

5. Pay attention to the size of the data returned and divide them into pages
10000 post
GET /v1/posts -> ! 10000 -> 10 per page
GET /v1/posts?page=20&pageSize=100

6. Use correct status code to represent request success/failure
201 -> post success
204 -> delete success

7. Return highly readable error message
{"error": "error"}
{"error": "invalid password"}

{"error": "A"}
js
{A: "invalid password"}