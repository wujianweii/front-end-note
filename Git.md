Git
======
### 版本回退


**获取commit hash**
```javascript
git reflog master  //查看本地master分支历史变动纪录 | Tower
```

**git reset**

```javascript
git reset --hard <COMMIT_ID>
git reset --hard master@{1} // 回退至当前版本
git push origin master --force // 强行覆盖远程记录
```

**git revert**

```javascript
git revert <COMMIT_ID> // 将该版本(包括该版本)之后的所有修改都回退
git add -A
git commit -am "版本回退"
git push origin master
```