# 记录相关问题


### `<span class="pre">command</span><span> </span><span class="pre">not</span><span> </span><span class="pre">found:</span><span> </span><span class="pre">django-admin</span>`[¶](https://docs.djangoproject.com/zh-hans/5.0/faq/troubleshooting/#command-not-found-django-admin "永久链接至标题")

如果你是通过 `<span class="pre">pip</span>` 安装 Django 的，[django-admin](https://docs.djangoproject.com/zh-hans/5.0/ref/django-admin/) 应该在你的系统路径中。如果它不在你的路径中，请确保你已经激活了你的虚拟环境，你可以尝试运行等效的命令 `<span class="pre">python</span><span> </span><span class="pre">-m</span><span> </span><span class="pre">django</span>`。

### macOS 的权限问题[¶](https://docs.djangoproject.com/zh-hans/5.0/faq/troubleshooting/#macos-permissions "永久链接至标题")

如果你正在使用 macOS，你可能看到“permission denied”提示，当你尝试运行 ``django-admin``的时候。这是因为在像 macOS 这种类Unix系统中，一个文件在它被当作程序执行之前必须被标记为“可执行”。为了解决这个问题，打开终端并且进入 **django-admin `的安装目录（使用``cd``命令），然后执行命令``sudo chmod +x django-admin`**.
