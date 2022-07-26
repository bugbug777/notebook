(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{295:function(s,a,t){"use strict";t.r(a);var n=t(10),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"git-branch"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-branch"}},[s._v("#")]),s._v(" Git Branch")]),s._v(" "),a("p",[s._v("分支應用")]),s._v(" "),a("h2",{attrs:{id:"分支操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支操作"}},[s._v("#")]),s._v(" 分支操作")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在當前 HEAD 建立分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BranchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立在特定 Commit_ID 上的分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BranchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" Commit_ID\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 建立並切換過去該分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BranchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切換到特定 commit 並建立分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("Commit_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" -b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BranchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切換分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BranchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 刪除分支, 例外：不能刪除當前正在使用的分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch -d "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("BranchName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h2",{attrs:{id:"暫存狀態"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#暫存狀態"}},[s._v("#")]),s._v(" 暫存狀態")]),s._v(" "),a("p",[s._v("暫存並非加入索引之中（暫存區），在不想 "),a("code",[s._v("reset")]),s._v(" 以及 "),a("code",[s._v("commit")]),s._v(" 的情況下使用。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暫存")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash save "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("TempName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查閱暫存清單")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash list\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取出暫存, 後進先出")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" stash pop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"異常情況"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#異常情況"}},[s._v("#")]),s._v(" 異常情況")]),s._v(" "),a("h3",{attrs:{id:"無法切換分支"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#無法切換分支"}},[s._v("#")]),s._v(" 無法切換分支")]),s._v(" "),a("p",[s._v("在不同分支中，同一隻檔案都有被修改時，無法帶著異動進行分支切換。")]),s._v(" "),a("p",[s._v("解法有三種：")]),s._v(" "),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("reset")]),s._v(" 重設異動")]),s._v(" "),a("li",[s._v("使用 "),a("code",[s._v("commit")]),s._v(" 先行提交異動，防止可能得衝突")]),s._v(" "),a("li",[s._v("利用 "),a("code",[s._v("stash")]),s._v(" 將異動暫存起來（並非進入暫存區，也就是索引")])]),s._v(" "),a("h2",{attrs:{id:"分支合併"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#分支合併"}},[s._v("#")]),s._v(" 分支合併")]),s._v(" "),a("p",[s._v("將不同分支的內容進行整合。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 將指定分支合併到目前分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OtherBranch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"快進與非快進合併"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快進與非快進合併"}},[s._v("#")]),s._v(" 快進與非快進合併")]),s._v(" "),a("p",[s._v("當欲合併分支的節點，與當前分支的節點，起點相同，預設就會是快進。")]),s._v(" "),a("ul",[a("li",[s._v("快進（fast-forward） - 利用現有的 commit 進行合併，不會產生新的 commit")]),s._v(" "),a("li",[s._v("非快進 - 一律產生新的 commit，表示合併的過程（易於辨識分支源頭")])]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 非快進")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge --no-ff "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("OtherBranch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"衝突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#衝突"}},[s._v("#")]),s._v(" 衝突")]),s._v(" "),a("p",[s._v("合併的分支，相同檔案產生衝突。")]),s._v(" "),a("p",[s._v("衝突發生時，git 會提示衝突程式碼位置，解決衝突後需要重新加入索引，並且再次提交。")]),s._v(" "),a("h3",{attrs:{id:"整理分支線圖"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#整理分支線圖"}},[s._v("#")]),s._v(" 整理分支線圖")]),s._v(" "),a("p",[s._v("使用 "),a("code",[s._v("git rebase")]),s._v(" 整理線圖。（可以將 rebase 理解為，重新以哪個分支為基底，通常是特點分支合併到主要分支")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 將當前分支合併到指定分支, 通常是主要分支")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("MainBranch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 如遇衝突，解衝突後，執行下面指令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" rebase --continue\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"cherry-pick"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cherry-pick"}},[s._v("#")]),s._v(" cherry-pick")]),s._v(" "),a("p",[s._v("只擷取部分的提交合併到當前分支。")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" cherry-pick Commit_ID\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);