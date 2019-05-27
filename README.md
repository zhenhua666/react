手记

## Git

### `四度空间`
    Workspace 工作区

    index/Stage/Cached 缓存区

    Repository 本地仓库

    Remote 远程仓库

### `七个主要命令`
 add commit push pull fetch/clone checkout

### `四种状态` 
    Untracked 新增的文件的状态，未受Git管理，记录在工作区

    Modified 受Git管理过的文件的改动状态(改动内容，删除文件)，记录在工作区

    Staged 将记录在工作区的文件变动状态通知了Git，记录在缓存区

    Unmodified 受Git管理中的文件状态(没有变动)，记录在本地仓库/远程仓库

### `git clone`
    $ git clone <库网址>

    该命令会在本地生成一个目录，与库同名，若要指定不同的目录名，可以将目录名作为第二个参数

    $git clone <库网址> <本地目录名>

### `git remote`
    使用-v选型，可以查看远程主机的网址

    $ git remote -v

    origin  https://github.com/zhenhua666/react.git (fetch)

    origin  https://github.com/zhenhua666/react.git (push)

    上面指令表示，远程主机名为 origin ,以及它的网址

    $ git clone -o nName https://github.com/zhenhua666/react.git

    上面命令表示，克隆的时候，指定远程主机叫nName

    查看主机信息

    $ git remote show <主机名> 

    添加远程主机
    $ git remote add <主机名> <网址>

    删除远程主机
    $ git remote rm <主机名>

    修改远程主机名字

    $ git remote rename <原主机名> <新主机名>

### `git fetch`
    
