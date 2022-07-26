# Git Remote

Git 遠端相關操作。

## 建立遠端儲存庫

在本地端建立遠端儲存庫（非 Github 在**遠端**的遠端儲存庫，而是**本地端**的遠端儲存庫

```sh
# 本地建立遠端儲存庫, 沒有 .git 因為不需要
git init --bare
# 本地建立遠端儲存庫, 並建立目錄
git init --bare [DirName]
```

## 查閱、設定遠端儲存庫

查閱遠端儲存庫相關資訊。

```sh
# 顯示遠端儲存庫清單
git remote

# 新增遠端儲存庫位置
git remote add [RepoName] [RepoUrl]
git remote add origin [RepoUrl]

# 移除遠端儲存庫位置
git remote remove [RepoName]
git remote remove origin

# 顯示遠端儲存庫資訊
git remote show [RepoName]
git remote show origin

# 查看遠端分支內容
git ls-remote [RepoUrl]
```

## 複製遠端儲存庫

在本地端沒有使用 `git init` 建立儲存庫的情況下，直接從遠端複製一份遠整的儲存庫下來。

```sh
# 若需要指定建立位置或名稱可以使用 FolderName
git clone [RemoteRepoUrl] [FolderName]
```

有儲存庫的情況使用 `git fetch` 或者 `git pull`

```sh
# 抓取遠端 commit 紀錄, 不改變工作目錄、HEAD、分支、暫存區
git fetch

# 更新本地端 commit, 合併時若本地端無遠端分支會自動建立
git merge [RemoteBranch]
git merge origin/main

# fetch 遠端 commit 紀錄後，並進行合併
git pull [RemoteRepoName] [RemoteBranch]
git pull origin main

# 設定 git pull 源頭（upstream） repo, 減少輸入命令字元
git pull -u origin/main main
```

## 推送到遠端儲存庫

將分支內容推送至遠端儲存庫

```sh
# 推送分支到遠端儲存庫
git push [RepoName] [Branch]
git push origin main

# 設定 git push 源頭（upstream） repo, 減少輸入命令字元
git push -u origin main
```

### 推送意外

在 `git push` 到遠端儲存庫時，git 會要求推送的 commits 中，一定要包含遠端的最後一個 commit。

在不符合上述情景的時候，需要先使用 `git pull` 取得遠端 commits（包含最後一個 commit 節點），再使用 `git push` 將 commits 推送至遠端。

## 是禁術

接下來的東西很恐怖！！

```sh
# 強制推送至遠端
git push -f

# 先 fetch 就可以強制推送到遠端, 表你已知有些 commits 紀錄還是要推
git push --force-with-lease

# 清除沒有在版控內的檔案, reset --hard 不會處理未追蹤檔案
git clean -f

# 清除 .git 中不需要的 objects
git gc
```
