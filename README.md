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

    使用it remote show查看主机信息

    $ git remote show <主机名> 

    使用git remote add添加远程主机

    $ git remote add <主机名> <网址>

    使用git remote rm删除远程主机

    $ git remote rm <主机名>

    使用git remote rename修改远程主机名字

    $ git remote rename <原主机名> <新主机名>

### `git fetch`
    一旦远程主机的库有更新，需要将这些更新取回本地，这时就要用到git fetch命令

    $ git fetch <远程主机名>

    上面命令将某个远程主机的更新，全部拉回本地

    可以指定分支名

    $ git fetch <远程主机名> <分支名>

    所取回的更新，在本地主机上要用"远程主机名/分支名"的形式读取。比如RS主机的master，就要用RS/master读取。
    git branch命令的-r选项，可以用来查看远程分支，-a选项查看所有分支。

    $ git branch -r
    RS/master

    $ git branch -a
    * master
    remotes/RS/master

    取回远程主机的更新以后，可以在它的基础上，使用git checkout命令创建一个新的分支。

    $ git checkout -b newBrach RS/master

    上面命令表示，在origin/master的基础上，创建一个新分支。
    此外，也可以使用git merge命令或者git rebase命令，在本地分支上合并远程分支。

    $ git merge RS/master

    或者

    $ git rebase RS/master

    上面命令表示在当前分支上，合并RS/master

### `git pull`
    git pull命令的作用是，取回远程主机某个分支的更新，再与本地的指定分支合并

    $ git full <远程主机名> <远程分支名>:<本地分支名>

    比如，取回RS主机的next分支，与本地的master分支合并，需要写成下面这样

    $git pull RS next:master

    如果远程分支是与当前分支合并，则冒号后面的部分可以省略。

    $ git pull origin next

    上面命令表示，取回origin/next分支，再与当前分支合并。实质上，这等同于先做git fetch，再做git merge。

    $ git fetch origin
    $ git merge origin/next

    在某些场合，Git会自动在本地分支与远程分支之间，建立一种追踪关系（tracking）。比如，在git clone的时候，所有本地分支默认与远程主机的同名分支，建立追踪关系，也就是说，本地的master分支自动"追踪"origin/master分支。
    Git也允许手动建立追踪关系。

    git branch --set-upstream master origin/next
    上面命令指定master分支追踪origin/next分支。
    如果当前分支与远程分支存在追踪关系，git pull就可以省略远程分支名。

    $ git pull origin
    上面命令表示，本地的当前分支自动与对应的origin主机"追踪分支"（remote-tracking branch）进行合并。
    如果当前分支只有一个追踪分支，连远程主机名都可以省略。

    $ git pull
    上面命令表示，当前分支自动与唯一一个追踪分支进行合并。
    如果合并需要采用rebase模式，可以使用--rebase选项。

    $ git pull --rebase <远程主机名> <远程分支名>:<本地分支名>

### `git push`
    git push命令用于将本地分支的更新，推送到远程主机。它的格式与git pull命令相仿

    $ git push <远程主机名> <本地分支名>:<远程分支名>

    注意，分支推送顺序的写法是<来源地>:<目的地>，所以git pull是<远程分支>:<本地分支>，而git push是<本地分支>:<远程分支>。
    如果省略远程分支名，则表示将本地分支推送与之存在"追踪关系"的远程分支（通常两者同名），如果该远程分支不存在，则会被新建。

    $ git push origin master
    
    上面命令表示，将本地的master分支推送到origin主机的master分支。如果后者不存在，则会被新建。
    如果省略本地分支名，则表示删除指定的远程分支，因为这等同于推送一个空的本地分支到远程分支。

    $ git push origin :master

    等同于

    $ git push origin --delete master

    上面命令表示删除origin主机的master分支
    如果当前分支只有一个追踪分支，那么主机名都可以省略

    $ git push

    如果当前分支与多个主机存在追踪关系，则可以使用-u选项指定一个默认主机，这样后面就可以不加任何参数使用git push。

    $ git push -u origin master

    上面命令将本地的master分支推送到origin主机，同时指定origin为默认主机，后面就可以不加任何参数使用git push了。
    不带任何参数的git push，默认只推送当前分支，这叫做simple方式。此外，还有一种matching方式，会推送所有有对应的远程分支的本地分支。
    Git 2.0版本之前，默认采用matching方法，现在改为默认采用simple方式。如果要修改这个设置，可以采用git config命令。

    $ git config --global push.default matching

    或者

    $ git config --global push.default simple
    
    还有一种情况，就是不管是否存在对应的远程分支，将本地的所有分支都推送到远程主机，这时需要使用--all选项。

    $ git push --all origin
    
    上面命令表示，将所有本地分支都推送到origin主机。

    如果远程主机的版本比本地版本更新，推送时Git会报错，要求先在本地做git pull合并差异，然后再推送到远程主机。
    这时，如果你一定要推送，可以使用--force选项。

    $ git push --force origin 

    上面命令使用--force选项，结果导致远程主机上更新的版本被覆盖。除非你很确定要这样做，否则应该尽量避免使用--force选项。
    最后，git push不会推送标签（tag），除非使用--tags选项。

    $ git push origin --tags