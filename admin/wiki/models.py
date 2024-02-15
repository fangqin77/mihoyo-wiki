from django.db import models

# Create your models here.

# 角色信息
class Role(models.Model):
    # 名称
    name = models.CharField(max_length=100)
    # 内容ID（米哈游的ID）
    content_id = models.CharField(max_length=100)
    # 模板id（米哈游的）
    template_id =  models.CharField(max_length=255)
    # 描述
    description = models.CharField(max_length=999)
    # 头像
    icon_url = models.CharField(max_length=255)
    # 星级
    star = models.IntegerField()
    # 主题色
    theme_color = models.CharField(max_length=100)
    # 头像 - pc
    avatar_pc = models.CharField(max_length=999)
    # 头像 - 移动端
    avatar_mobile = models.CharField(max_length=999)
    # 属性集合
    attrs = models.CharField(max_length=999)
    
# 武器信息
class Weapon(models.Model):
    # 名称
    name = models.CharField(max_length=100)
    # 内容ID（米哈游的ID）
    content_id = models.CharField(max_length=100)
    # 模板id（米哈游的）
    template_id =  models.CharField(max_length=255)
    # 描述
    description = models.CharField(max_length=999)
    # 头像
    icon_url = models.CharField(max_length=255)
    # 星级
    star = models.IntegerField()
    # 分类
    category = models.CharField(max_length=100)
    # 图片
    image = models.CharField(max_length=999)
    # 富文本描述
    rich_text = models.CharField(max_length=999)
    # 属性
    attrs = models.CharField(max_length=999)
