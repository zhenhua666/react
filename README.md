手记

## Git

###四度空间
    Workspace 工作区
    index/Stage/Cached 缓存区
    Repository 本地仓库
    Remote 远程仓库

###七个主要命令
 add commit push pull fetch/clone checkout

###四种状态 
    Untracked 新增的文件的状态，未受Git管理，记录在工作区
    Modified 受Git管理过的文件的改动状态(改动内容，删除文件)，记录在工作区
    Staged 将记录在工作区的文件变动状态通知了Git，记录在缓存区
    Unmodified 受Git管理中的文件状态(没有变动)，记录在本地仓库/远程仓库