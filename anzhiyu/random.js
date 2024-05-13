var posts=["2024/05/13/LDAP注入/","2024/05/02/hello-world/","2024/05/13/SQL注入/","2024/05/13/php反序列化/","2024/05/13/java基础/","2024/05/12/博客搭建/","2024/05/13/pickle反序列化/","2024/05/13/远程命令执行/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };