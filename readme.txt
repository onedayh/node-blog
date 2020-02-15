目标:
1、开发一个博客系统,具备博客的基本功能.
2、只开发server端,不关注前端.

需求:
1、首页、作者主页、博客详情页.
2、登录页.
3、管理中心、新建页、编辑页.

技术方案:
1、数据如何存储?
数据库
博客表:id, title, content, createTime, author
用户表:id, userName, password, realName
2、接口如何设计?
描述		    接口			        方法	    url参数			       postData
||		     ||			           ||	      ||			          ||
登录		    /api/user/login	  post				               用户信息
获取博客列表 /api/blog/list		 get	    author, keyword
获取博客详情 /api/blog/detail	 get	    id
新增博客		/api/blog/add		  post				                博客新增信息
编辑博客		/api/blog/edit		post	   id			            博客信息
删除博客		/api/blog/delete	post	   id