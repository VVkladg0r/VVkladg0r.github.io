var posts=["2024/05/13/USB流量分析/","2024/05/13/LDAP注入/","2024/05/13/docker/","2024/05/02/hello-world/","2024/05/13/burpfakeIP/","2024/05/13/SQL注入/","2024/05/13/java基础/","2024/05/12/博客搭建/","2024/05/13/远程命令执行/","2024/05/13/php反序列化/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };