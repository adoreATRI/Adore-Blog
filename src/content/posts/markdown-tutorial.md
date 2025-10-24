---
title: Git笔记(备忘向)
published: 2025-10-25
pinned: false
description: 对常用Git语法的总结
tags: [Markdown, Blogging]
category: Note
licenseName: "Unlicensed"
author: AdoreATRI
sourceLink: "https://github.com/adoreATRI/Note/tree/main/GIT"
draft: false
---

# Git
- [Git](#git)
  - [基本操作](#基本操作)
    - [本地仓库操作](#本地仓库操作)
      - [暂存类](#暂存类)
      - [提交类](#提交类)
      - [状态类](#状态类)
      - [分支类](#分支类)
    - [远程仓库操作](#远程仓库操作)
      - [Push类](#push类)
      - [Pull类](#pull类)
  - [管理方法](#管理方法)
    - [分支管理](#分支管理)
    - [本地仓库管理](#本地仓库管理)
    - [多人协作管理](#多人协作管理)
   

## 基本操作
### 本地仓库操作
#### 暂存类
1.git add (参数) //将文件添加到暂存区
- "."表示全部文件，文件名表示单个文件
- "文件夹名"表示整个文件夹
- "-a/--all"过的文件全部添加到暂存区

2.git reset 分支名 (文件名) //将文件从暂存区移除

----

#### 提交类
1.git commit -m "提交信息" //提交暂存区到本地仓库

----

#### 状态类
1.git status //查看当前仓库状态

2.git log (参数) //查看提交历史
- \-p (次数) 显示每次提交的差异
- \-stat 以统计信息的形式显示每次提交的差异
- \--graph 以图形化的形式显示提交历史
- \--pretty=(参数) 自定义显示格式
常见参数：
    - oneline：每次提交显示为一行
    - short：简短格式
    - full：完整格式
    - fuller：更完整格式
    - format:(自定义格式)
常见格式：
      - %H：提交对象的完整哈希值
      - %h：提交对象的简短哈希值
      - %an：作者名称
      - %ae：作者邮箱
      - %ad：作者日期（可以通过 --date= 选项自定义格式）
      - %s：提交说明

3.git tag (参数) //仓库标签
- \-a (标签) \-m "信息" //附注标签
- (标签) //轻量标签
- \-a (标签) 哈希值 //后期打标签
- \-d (标签) 删除标签

4.git reset (参数) (哈希值) //回退到指定版本(配合git reflog使用可以找回误删版本)
- \--hard：撤销所有修改
- \--soft：只撤销commit
- \--mixed：撤销commit和暂存区修改

----

#### 分支类
1.git branch (分支名) (远程分支) //创建分支(设置跟踪远程分支)

2.git checkout (分支名) //切换分支

3.git branch -d (分支名) //删除分支

4.git branch -m (旧分支名) (新分支名) //重命名分支

5.git merge (分支名) //合并分支

6.git branch --set-upstream-to=(主机名)/(远程分支名) //设置本地分支与远程分支的对应关系

6.git rebase (分支名) //变基操作

7.git fetch (主机名) //获取远程分支到本地

8.git branch -vv //查看本地分支与远程分支的对应关系

----

### 远程仓库操作
#### Push类
1.git push (主机名) (当前分支名):(远程分支名) //推送当前分支到远程分支

2.git push (主机名) --delete (分支名) //删除远程分支

3.git push (主机名) (标签名)/--tags //共享特定/全部标签

4.git push (主机名) --delete (标签) //删除远程仓库标签

----

#### Pull类
1.git pull (主机名) (分支名) //拉取远程分支并合并到当前分支

----

## 管理方法
### 分支管理
- 分支开发工作流：在master上保存稳定代码，在develop分支上进行日常开发，功能开发在feature分支上进行，完成后合并到develop分支，发布版本时从develop分支合并到master分支
- 合并管理：合并有时会冲突，需要用git status找到并手动解决冲突
- 变基管理：变基可以让提交历史更清晰，但会改变提交历史，慎用

----

### 本地仓库管理
- 用.gitignore文件忽略不需要版本控制的文件

----

### 多人协作管理
- 注意给本地对应分支设置跟踪远程分支