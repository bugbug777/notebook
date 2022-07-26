# Git Branch

分支應用

## 分支操作

```sh
# 查看所有分支
git branch

# 在當前 HEAD 建立分支
git branch [BranchName]
# 建立在特定 Commit_ID 上的分支
git branch [BranchName] Commit_ID
# 建立並切換過去該分支
git checkout -b [BranchName]
# 切換到特定 commit 並建立分支
git checkout [Commit_id] -b [BranchName]

# 切換分支
git checkout [BranchName]

# 刪除分支, 例外：不能刪除當前正在使用的分支
git branch -d [BranchName]
```

## 暫存狀態

暫存並非加入索引之中（暫存區），在不想 `reset` 以及 `commit` 的情況下使用。

```sh
# 暫存
git stash save [TempName]

# 查閱暫存清單
git stash list

# 取出暫存, 後進先出
git stash pop
```

## 異常情況

### 無法切換分支

在不同分支中，同一隻檔案都有被修改時，無法帶著異動進行分支切換。

解法有三種：

- 使用 `reset` 重設異動
- 使用 `commit` 先行提交異動，防止可能得衝突
- 利用 `stash` 將異動暫存起來（並非進入暫存區，也就是索引

## 分支合併

將不同分支的內容進行整合。

```sh
# 將指定分支合併到目前分支
git merge [OtherBranch]
```

### 快進與非快進合併

當欲合併分支的節點，與當前分支的節點，起點相同，預設就會是快進。

- 快進（fast-forward） - 利用現有的 commit 進行合併，不會產生新的 commit
- 非快進 - 一律產生新的 commit，表示合併的過程（易於辨識分支源頭

```sh
# 非快進
git merge --no-ff [OtherBranch]
```

### 衝突

合併的分支，相同檔案產生衝突。

衝突發生時，git 會提示衝突程式碼位置，解決衝突後需要重新加入索引，並且再次提交。

### 整理分支線圖

使用 `git rebase` 整理線圖。（可以將 rebase 理解為，重新以哪個分支為基底，通常是特點分支合併到主要分支

```sh
# 將當前分支合併到指定分支, 通常是主要分支
git rebase [MainBranch]

# 如遇衝突，解衝突後，執行下面指令
git add .
git rebase --continue
```

### cherry-pick

只擷取部分的提交合併到當前分支。

```sh
git cherry-pick Commit_ID
```
