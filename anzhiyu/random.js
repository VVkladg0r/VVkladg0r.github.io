var posts=["2024/05/15/2023-NKCTF-wp/","2024/05/13/2023-NewstarCTF-wp/","2024/05/15/2023-第一届“帕鲁杯”CTF-wp/","2024/05/15/2023-蓝桥杯-wp/","2024/05/23/H&NCTF-wp/","2024/05/15/2023-XYCTF-wp/","2024/06/07/JAVA加载字节码/","2024/05/13/LDAP注入/","2024/05/25/ISCC-wp/","2024/05/13/USB流量分析/","2024/05/13/burpfakeIP/","2024/05/13/docker/","2024/05/13/frp内网穿透/","2024/05/13/MD5长度拓展攻击/","2024/05/02/hello-world/","2024/05/13/SQL注入/","2024/05/15/java反射/","2024/05/23/java-RMI/","2024/06/07/java反序列化-CC2/","2024/06/07/java反序列化-CC3/","2024/06/07/java反序列化-CC5/","2024/06/07/java反序列化-CC4/","2024/06/07/java反序列化-CC6/","2024/06/07/java反序列化-CC1/","2024/05/23/java反序列化-URLDNS/","2024/06/07/java反序列化-CC7/","2024/05/13/php反序列化/","2024/05/13/java基础/","2024/05/13/pickle反序列化/","2024/05/12/博客搭建/","2024/05/23/java反序列化前置/","2024/05/13/反弹shell/","2024/05/13/远程命令执行/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };