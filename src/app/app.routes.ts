import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserLoginService } from './user/user-login/user-login.service';
import { UserRegisterComponent} from './user/user-register/user-register.component';
import { UserProfileComponent} from './user/user-profile/user-profile.component';
import { UserMainComponent} from './user/user-main/user-main.component';
import { UserInfoComponent } from './user/user-info/user-info.component';
import { PostlistComponent } from './post/postlist/postlist.component';
import { HomeComponent } from './home/home.component';
import { PostDetailMainComponent } from './post/post-detail-main/post-detail-main.component';
import { PostDetailComponent } from './post/post-detail/post-detail.component';
import { WritePostComponent } from './post/write-post/write-post.component';
import { AddCommentComponent } from './comment/add-comment/add-comment.component';
import { SitestatComponent } from './sitestat/sitestat.component';
import { ManageMainComponent } from './manage/manage-main/manage-main.component';
import { UserTableComponent } from './manage/user-table/user-table.component';
import { PostTableComponent } from './manage/post-table/post-table.component';
import { CommentTableComponent } from './manage/comment-table/comment-table.component';
import { SysParamComponent } from './manage/sys-param/sys-param.component';

const appRoutes=[
	{
		path:'',
		component:HomeComponent
	},
	{
		path:'home',
		component:HomeComponent
	},
	{
		path:'login',
		component:UserLoginComponent
	},
	{
		path:'register',
		component:UserRegisterComponent
	},
	{
		path:'profile',
		component:UserProfileComponent
	},
	{
		path:'usermain',
		component:UserMainComponent
	},
	{ 
		path: 'postdetail/:postId', 
		component: PostDetailMainComponent 
	},
	{ 
		path: 'write', 
		component: WritePostComponent 
	},
	{ 
		path: 'manage', 
		component: ManageMainComponent 
	},
	{ 
		path: 'posttable', 
		component: PostTableComponent 
	},
	{ 
		path: 'commenttable', 
		component: CommentTableComponent 
	},
	{ 
		path: 'usertable', 
		component: UserTableComponent 
	},
	{ 
		path: 'sysparam', 
		component: SysParamComponent 
	},
	{
		path:'**',//fallback router must in the last
		component:HomeComponent
	}
];
export default RouterModule.forRoot(appRoutes);