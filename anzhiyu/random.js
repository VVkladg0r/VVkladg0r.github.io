var posts=["2024/05/15/2023-NKCTF-wp/","2024/05/15/2023-第一届“帕鲁杯”CTF-wp/","2024/05/15/2023-蓝桥杯-wp/","2024/05/13/LDAP注入/","2024/05/13/2023-NewstarCTF-wp/","2024/05/13/MD5长度拓展攻击/","2024/05/15/2023-XYCTF-wp/","2024/05/13/USB流量分析/","2024/05/13/burpfakeIP/","2024/05/13/docker/","2024/05/13/frp内网穿透/","2024/05/02/hello-world/","2024/05/13/SQL注入/","2024/05/13/java基础/","2024/05/12/博客搭建/","2024/05/13/php反序列化/","2024/05/13/pickle反序列化/","2024/05/13/反弹shell/","2024/05/13/远程命令执行/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };