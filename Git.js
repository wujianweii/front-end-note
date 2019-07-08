Git 

// Git常用命令总结 - https://blog.csdn.net/tomatozaitian/article/details/73515849

// 创建文件
// touch README.md / .gitignore


// - https://www.cnblogs.com/syq816/p/9301700.html(删除)
// 在本地仓库删除指定文件
// rm 文件

// 在本地仓库删除指定文件夹
// rm -r 文件夹


// 暂存区(git add - 增加到暂存区中) / 工作区(当前编辑) / 历史区(git hash)

// git reflog - 后悔药(恢复被删除的版本)
// - https://blog.csdn.net/u013252047/article/details/80230781

// git diff
// 查看本地文件修改记录


// git stash - 暂存当前正在进行的工作
// - https://blog.csdn.net/wh_19910525/article/details/7784901
// git stash list - 查看stash列表
// git stash drop - 丢掉保存的内容
// git stash pop - 应用stash并丢掉
// git stash apply stash@{1} - 应用指定版本号的stash
// git stash clear - 清空stash