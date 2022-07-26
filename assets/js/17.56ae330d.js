(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{296:function(s,t,n){"use strict";n.r(t);var a=n(10),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"git-remote"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#git-remote"}},[s._v("#")]),s._v(" Git Remote")]),s._v(" "),t("p",[s._v("Git 遠端相關操作。")]),s._v(" "),t("h2",{attrs:{id:"建立遠端儲存庫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#建立遠端儲存庫"}},[s._v("#")]),s._v(" 建立遠端儲存庫")]),s._v(" "),t("p",[s._v("在本地端建立遠端儲存庫（非 Github 在"),t("strong",[s._v("遠端")]),s._v("的遠端儲存庫，而是"),t("strong",[s._v("本地端")]),s._v("的遠端儲存庫")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地建立遠端儲存庫, 沒有 .git 因為不需要")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init --bare\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 本地建立遠端儲存庫, 並建立目錄")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init --bare "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("DirName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"查閱、設定遠端儲存庫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查閱、設定遠端儲存庫"}},[s._v("#")]),s._v(" 查閱、設定遠端儲存庫")]),s._v(" "),t("p",[s._v("查閱遠端儲存庫相關資訊。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 顯示遠端儲存庫清單")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增遠端儲存庫位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RepoName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RepoUrl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RepoUrl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 移除遠端儲存庫位置")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote remove "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RepoName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote remove origin\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 顯示遠端儲存庫資訊")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RepoName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote show origin\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看遠端分支內容")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" ls-remote "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RepoUrl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h2",{attrs:{id:"複製遠端儲存庫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#複製遠端儲存庫"}},[s._v("#")]),s._v(" 複製遠端儲存庫")]),s._v(" "),t("p",[s._v("在本地端沒有使用 "),t("code",[s._v("git init")]),s._v(" 建立儲存庫的情況下，直接從遠端複製一份遠整的儲存庫下來。")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 若需要指定建立位置或名稱可以使用 FolderName")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RemoteRepoUrl"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("FolderName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("p",[s._v("有儲存庫的情況使用 "),t("code",[s._v("git fetch")]),s._v(" 或者 "),t("code",[s._v("git pull")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 抓取遠端 commit 紀錄, 不改變工作目錄、HEAD、分支、暫存區")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" fetch\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新本地端 commit, 合併時若本地端無遠端分支會自動建立")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RemoteBranch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge origin/main\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fetch 遠端 commit 紀錄後，並進行合併")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RemoteRepoName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RemoteBranch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin main\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 設定 git pull 源頭（upstream） repo, 減少輸入命令字元")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull -u origin/main main\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br")])]),t("h2",{attrs:{id:"推送到遠端儲存庫"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送到遠端儲存庫"}},[s._v("#")]),s._v(" 推送到遠端儲存庫")]),s._v(" "),t("p",[s._v("將分支內容推送至遠端儲存庫")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 推送分支到遠端儲存庫")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("RepoName"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Branch"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin main\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 設定 git push 源頭（upstream） repo, 減少輸入命令字元")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -u origin main\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"推送意外"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#推送意外"}},[s._v("#")]),s._v(" 推送意外")]),s._v(" "),t("p",[s._v("在 "),t("code",[s._v("git push")]),s._v(" 到遠端儲存庫時，git 會要求推送的 commits 中，一定要包含遠端的最後一個 commit。")]),s._v(" "),t("p",[s._v("在不符合上述情景的時候，需要先使用 "),t("code",[s._v("git pull")]),s._v(" 取得遠端 commits（包含最後一個 commit 節點），再使用 "),t("code",[s._v("git push")]),s._v(" 將 commits 推送至遠端。")]),s._v(" "),t("h2",{attrs:{id:"是禁術"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#是禁術"}},[s._v("#")]),s._v(" 是禁術")]),s._v(" "),t("p",[s._v("接下來的東西很恐怖！！")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 強制推送至遠端")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push -f\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先 fetch 就可以強制推送到遠端, 表你已知有些 commits 紀錄還是要推")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push --force-with-lease\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除沒有在版控內的檔案, reset --hard 不會處理未追蹤檔案")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clean -f\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清除 .git 中不需要的 objects")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" gc\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);