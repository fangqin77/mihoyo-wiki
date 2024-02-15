# mihoyo-wiki

项目启动

```
python3 .\manage.py runserver 0.0.0.0:8080
```


docker启动mysql8.0版本镜像


docker run --name mysql3306   -e MYSQL_ROOT_PASSWORD=Admin@777     -p 3306:3306   -v ~/mydata/mysql/data/db:/var/lib/mysql   -v ~/mydata/mysql/data/conf:/etc/mysql/conf.d     -v ~/mydata/mysql/log:/var/log/mysql   -d mysql:8.0 mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci
