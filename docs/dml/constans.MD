数据库

数据库版本 8.0+

Django 5+

https://docs.djangoproject.com/zh-hans/5.0/intro/tutorial01/



迁移是非常强大的功能，它能让你在开发过程中持续的改变数据库结构而不需要重新删除和创建表 - 它专注于使数据库平滑升级而不会丢失数据。我们会在后面的教程中更加深入的学习这部分内容，现在，你只需要记住，改变模型需要这三步：

* 编辑 `<span class="pre">models.py</span>` 文件，改变模型。
* 运行 [`<span class="pre">python</span><span> </span><span class="pre">manage.py</span><span> </span><span class="pre">makemigrations</span>`](https://docs.djangoproject.com/zh-hans/5.0/ref/django-admin/#django-admin-makemigrations) 为模型的改变生成迁移文件。
* 运行 [`<span class="pre">python</span><span> </span><span class="pre">manage.py</span><span> </span><span class="pre">migrate</span>`](https://docs.djangoproject.com/zh-hans/5.0/ref/django-admin/#django-admin-migrate) 来应用数据库迁移。

数据库迁移被分解成生成和应用两个命令是为了让你能够在代码控制系统上提交迁移数据并使其能在多个应用里使用；这不仅仅会让开发更加简单，也给别的开发者和生产环境中的使用带来方便。
