webpackJsonp([2],{SKi1:function(e,s,r){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o,_=r("a3Yh"),t=r.n(_),i=(o={auth_login:"accounts/wxa_login",auth_logout:"auth/logout",auth_register:"auth/register",auth_check_mobile:"auth/mobile",auth_get_msm_code:"users/wx_bind_mobile_verify_code",bind_mobile:"accounts/wxa_bind_mobile",auth_weixin:"accounts/wxa_get_authorize_info",wxa_authorize_bind_mobile:"accounts/wxa_authorize_bind_mobile",auth_refresh_session:"accounts/refresh_wxa_session",countries:"countries",bind_friend:"guess_image/add_friend",shop_animation:"store/store_headline",user:"users",user_profile:"users/:id/profile",users_profile:"users/profile",user_authorize:"accounts/wxa_authorize",user_avatar_upload:"",user_upload_token:"assets/user_upload_token",user_withdraw:"pay_account/life_cash_money",orders_order_coupon_count:"orders/order_coupon_count",market_is_new_user_bonus:"market/is_new_user_bonus",market_grant_new_user_bonus:"market/grant_new_user_bonus",users_get_visitor_life_stores:"users/get_visitor_life_stores",market_share_store_poster:"market/share/store_poster",store_close_phases_description:"store/close_phases_description",asset_upload:"assets/upload",asset_detail:"assets/show_asset",categories:"official/categories",siblings_categories:"categories/siblings",market_share_store:"market/share/store",market_share_life_store:"market/share/life_store",market_share_invite_poster:"market/share/invite_poster",market_share_invite_carde:"market/share/invite_card",market_share_window_poster:"market/share/shop_window_poster",market_share_product_card:"market/share/product_card",brand_list:"brands",brand_detail:"brands/:rid",shop_info:"official_store/info",official_store_info:"official_store/info",store_announcement:"store/announcement",official_store_announcement:"official_store/announcement",BrowseQuantityNumber:"store/:rid/visitor",brand_info:"store/detail",is_authentication:"users/get_authenticate_status",official_store_detail:"official_store/detail",life_store:"store/life_store",life_store_edit:"store/edit_store",life_store_apply:"store/apply_life_store",life_store_products:"core_platforms/products/by_store",life_records_detail:"life_records/detail",life_records_similar:"life_records/similar",life_records_comments:"life_records/comments",life_records_child_comments:"life_records/child_comments",life_records_comments_praises:"life_records/comments/praises",life_records_praises:"life_records/praises",life_records_user_likes:"life_records/user_likes",life_store_delete_product:"core_platforms/fx_distribute/remove",life_store_last_visit:"users/last_store",life_store_update_rid:"users/update_last_store_rid",life_store_headlines:"store/store_headline"},t()(o,"life_store_update_rid","users/update_last_store_rid"),t()(o,"life_store_update_logo","store/update_life_store_logo"),t()(o,"life_records_guess_likes","life_records/guess_likes"),t()(o,"life_store_delete_product","core_platforms/fx_distribute/remove"),t()(o,"life_records_wonderful_stories","life_records/wonderful_stories"),t()(o,"life_store_orders_collect","stats/life_orders_collect"),t()(o,"life_store_orders_list","orders/life_orders"),t()(o,"life_store_income_collect","stats/life_orders_sale_collect"),t()(o,"life_store_cash_collect","stats/life_cash_collect"),t()(o,"life_store_last_withdraw","stats/life_cash_recent"),t()(o,"cash_money_count","cash_money/count"),t()(o,"life_store_transactions","stats/life_orders/transactions"),t()(o,"life_store_orders","orders/life_orders"),t()(o,"life_store_statements","stats/life_orders/statements"),t()(o,"life_store_statement_detail","stats/life_orders/statement_items"),t()(o,"life_store_income_detail","stats/life_orders/:rid"),t()(o,"core_platforms_life_records","core_platforms/life_records"),t()(o,"life_records_recommend_products","life_records/recommend_products"),t()(o,"life_records_creator_story","life_records/creator_story"),t()(o,"life_records_hand_teach","life_records/hand_teach"),t()(o,"life_records_grass_note","life_records/grass_note"),t()(o,"life_records_life_remember","life_records/life_remember"),t()(o,"official_store_master_info","official_store/master_info"),t()(o,"users_save_form_ids","users/save_form_ids"),t()(o,"life_invite_count","invite_life_count"),t()(o,"life_invite_reward","invite_life_reward"),t()(o,"life_invite_reward_list","invite_life/rewards"),t()(o,"life_invite_friends","invite_life/friends"),t()(o,"life_invite_cash","invite_life/cash_money"),t()(o,"users_cash_id_card","users/cash_id_card"),t()(o,"get_all_distribution","fx_distribute/index"),t()(o,"get_hot_distribution","fx_distribute/hot"),t()(o,"get_sticked_distribution","fx_distribute/sticked"),t()(o,"get_new_distribution","fx_distribute/latest"),t()(o,"distribution_sell","core_platforms/fx_distribute/publish"),t()(o,"distribute_newest","core_platforms/fx_distribute/latest"),t()(o,"distribution_week_popular","fx_distribute/week_popular"),t()(o,"distribute_products","fx_distribute/choose_center"),t()(o,"distribute_product_count","fx_distribute/choose_center/count"),t()(o,"products","products/by_store"),t()(o,"latest_products","products/latest"),t()(o,"sticked_products","fx_distribute/agency"),t()(o,"brand_products","products/by_brand/:rid"),t()(o,"product_info","products/:rid"),t()(o,"product_content","products/:rid/detail"),t()(o,"product_detail","products/:rid/all_detail"),t()(o,"by_sku","products/by_sku"),t()(o,"by_store_sku","products/by_store_sku"),t()(o,"product_skus","products/skus"),t()(o,"skus","products/by_sku"),t()(o,"wishlist","wishlist"),t()(o,"wishlist_addto","wishlist/addto"),t()(o,"wishlist_remove","wishlist/remove"),t()(o,"wxacode","market/wxacode"),t()(o,"market_wxa_code","market/wxa_code"),t()(o,"wxa_poster","market/wxa_poster"),t()(o,"theme_product","wx_app_design"),t()(o,"theme","wx_app_design/collections"),t()(o,"marketBanners","banners/:rid"),t()(o,"products_index","products/index"),t()(o,"logistics_core_freight_template","logistics/core_freight_template/:rid"),t()(o,"products_custom_made","products/custom_made"),t()(o,"products_free_postage","products/free_postage"),t()(o,"products_basic","products/basic"),t()(o,"products_detail","products/detail"),t()(o,"handpick_new_express","column/handpick_new_express"),t()(o,"handpick_new_express_count","column/handpick_new_express/count"),t()(o,"banners_rid","banners/:rid"),t()(o,"banners_explore","banners/explore"),t()(o,"banners_handpick","banners/handpick"),t()(o,"products_similar","products/similar"),t()(o,"category_products","category/products"),t()(o,"category_products_count","category/products/count"),t()(o,"column_collections","column/collections"),t()(o,"column_collections_basic","column/collections/basic"),t()(o,"column_explore_new","column/explore_new"),t()(o,"column_explore_new_count","column/explore_new/count"),t()(o,"core_platforms_search","core_platforms/search"),t()(o,"life_records_recommend","life_records/recommend"),t()(o,"shop_windows_guess_like","shop_windows/guess_like"),t()(o,"column_daily_recommends","column/daily_recommends"),t()(o,"column_affordable_goods","column/affordable_goods"),t()(o,"column_affordable_goods_count","column/affordable_goods/count"),t()(o,"column_explore_recommend","column/explore_recommend"),t()(o,"column_explore_recommend_count","column/explore_recommend/count"),t()(o,"column_collections_detail","column/collections/detail"),t()(o,"banners_handpick_content","banners/handpick_content"),t()(o,"column_handpick_recommend","column/handpick_recommend"),t()(o,"column_preferential_design","column/preferential_design"),t()(o,"column_preferential_design_count","column/preferential_design/count"),t()(o,"core_platforms_search_users","core_platforms/search/users"),t()(o,"core_platforms_search_stores","core_platforms/search/stores"),t()(o,"column_handpick_optimization","column/handpick_optimization"),t()(o,"column_handpick_optimization_count","column/handpick_optimization/count"),t()(o,"core_platforms_search_products","core_platforms/search/products"),t()(o,"core_platforms_search_week_hot","core_platforms/search/week_hot"),t()(o,"core_platforms_search_hot_recommend","core_platforms/search/hot_recommend"),t()(o,"shop_windows_comments","shop_windows/comments"),t()(o,"shop_windows_child_comments","shop_windows/child_comments"),t()(o,"shop_windows_comments_praises","shop_windows/comments/praises"),t()(o,"shop_windows_handpick","shop_windows/handpick"),t()(o,"users_user_dynamic","users/user_dynamic"),t()(o,"column_feature_store","column/feature_store"),t()(o,"column_feature_store_all","column/feature_store_all"),t()(o,"column_handpick_store","column/handpick_store"),t()(o,"column_browse_records","column/browse_records"),t()(o,"users_other_followed_stores","users/other_followed_stores"),t()(o,"users_other_followed_users","users/other_followed_users"),t()(o,"other_userlike","other_userlike"),t()(o,"other_wishlist","other_wishlist"),t()(o,"users_other_followed_life_stores","users/other_followed_stores"),t()(o,"users_other_user_dynamic","users/other_user_dynamic"),t()(o,"users_other_user_center","users/get_other_user_center"),t()(o,"users_other_user_fans","users/other_user_fans"),t()(o,"other_user_browses","other_user_browses"),t()(o,"cart","cart"),t()(o,"cart_addon","cart"),t()(o,"cart_remove","cart/:rid/remove"),t()(o,"cart_clear","cart/clear"),t()(o,"cart_item_count","cart/item_count"),t()(o,"clearCart","cart/remove"),t()(o,"orders","orders"),t()(o,"order_detail","orders/:rid"),t()(o,"order_quick_buy","orders/quick_buy"),t()(o,"order_by_cart","orders/cart_buy"),t()(o,"order_create","orders/create"),t()(o,"order_delete","orders/:rid/delete"),t()(o,"order_cancel","orders/cancel"),t()(o,"order_signed","orders/signed"),t()(o,"order_paid_status","orders/up_paid_status"),t()(o,"order_prepay_sign","orders/wx_prepay_sign"),t()(o,"critique_product","orders/product/comment/create"),t()(o,"orders_delete","orders/delete"),t()(o,"core_orders_rid","core_orders/:rid"),t()(o,"logistics_information","logistics/information"),t()(o,"logistics_same_template_express","logistics/same_template_express"),t()(o,"orders_after_payment_rid","orders/after_payment/:rid"),t()(o,"is_first_order","market/coupons/new_user_discount"),t()(o,"user_login_coupon","market/user_master_coupons"),t()(o,"coupons","market/coupons"),t()(o,"checkout_authority_couponList","market/user_official_fill"),t()(o,"noCouponsList","market/not_login_coupons"),t()(o,"coupon_detail","market/coupons/:rid"),t()(o,"user_coupons","market/user_coupons"),t()(o,"available_coupons","market/coupons/available"),t()(o,"coupon_grant","market/coupons/grant"),t()(o,"red_bag","market/bonus"),t()(o,"authority_coupon","market/user_official"),t()(o,"market_official_coupons_grant","market/official_coupons/grant"),t()(o,"market_official_coupons_recommend","market/official_coupons/recommend"),t()(o,"market_coupon_center_shared","market/coupon_center_shared"),t()(o,"market_coupon_center_single","market/coupon_center_single"),t()(o,"order_info_page_coupon","market/user_order_coupons"),t()(o,"full_reduction","market/user_order_full_reduction"),t()(o,"first_order_reduction","market/coupons/new_user_discount"),t()(o,"noLoginFullSubtraction","market/coupons"),t()(o,"market_bonus_grant","market/bonus/grant"),t()(o,"market_bonus_lines","market/bonus_lines"),t()(o,"market_official_coupons","market/official_coupons"),t()(o,"market_core_user_coupons","market/core_user_coupons"),t()(o,"market_coupon_lines","market/coupon_lines"),t()(o,"market_user_expired","market/user_expired"),t()(o,"market_read_time","market/read_time"),t()(o,"search","search/products"),t()(o,"search_history","search/history"),t()(o,"cities","address/cities"),t()(o,"city","address/cities"),t()(o,"addresses","address"),t()(o,"address_addto","address"),t()(o,"address_info","address/:rid"),t()(o,"address_update","address/:rid"),t()(o,"address_delete","address/:rid"),t()(o,"address_default","address/is_default"),t()(o,"address_set_default","address/:rid/set_default"),t()(o,"place_provinces","places/provinces"),t()(o,"place_cities","places/:pid/cities"),t()(o,"place_towns","places/:pid/towns"),t()(o,"place_areas","places/:pid/areas"),t()(o,"all_places","places"),t()(o,"provinces_cities","places/provinces_cities"),t()(o,"get_country","auth/area_code"),t()(o,"address_user_custom","address/custom"),t()(o,"pay_wechat","pay/wechat"),t()(o,"slide_list","common/slides"),t()(o,"wxapp_info","store/wxapp"),t()(o,"demo","demo"),t()(o,"add_watch","follow/store"),t()(o,"delete_watch","unfollow/store"),t()(o,"examine_watch","follow/get_status"),t()(o,"add_browse","store/visitor"),t()(o,"userlike","userlike"),t()(o,"usetIsLike","products_userlike"),t()(o,"logisitcs","logistics/freight_template/:rid"),t()(o,"logistics_product_express","logistics/product/express"),t()(o,"cheapLogisitcs","logistics/freight/available"),t()(o,"calculate_logisitcs","logistics/freight/calculate"),t()(o,"store_owner_info","users/authenticate"),t()(o,"masterInfo","store/master_info"),t()(o,"users_user_center","users/user_center"),t()(o,"users_profile","users/profile"),t()(o,"user_browses","user_browses"),t()(o,"product_userlike","product/userlike"),t()(o,"users_fans_counts","users/user_fans"),t()(o,"users_followed_users","users/followed_users"),t()(o,"follow_user","follow/user"),t()(o,"unfollow_user","unfollow/user"),t()(o,"users_followed_stores","users/followed_stores"),t()(o,"shop_windows","shop_windows"),t()(o,"shop_windows_detail","shop_windows/detail"),t()(o,"shop_windows_similar","shop_windows/similar"),t()(o,"shop_windows_follow","shop_windows/follow"),t()(o,"shop_windows_keywords","shop_windows/keywords"),t()(o,"shop_windows_user_likes","shop_windows/user_likes"),t()(o,"shop_windows_recommend","shop_windows/recommend"),t()(o,"shop_windows_hot_keywords","shop_windows/hot_keywords"),t()(o,"shop_windows_search_keywords","shop_windows/search/keywords"),t()(o,"shop_windows_keyword","shop_windows/keyword"),t()(o,"auth_sms_code","users/wx_bind_mobile_verify_code"),t()(o,"question_stats","guess_image/people_count"),t()(o,"question","guess_image/question"),t()(o,"question_check_answer","guess_image/answers"),t()(o,"question_settlement","guess_image/test_settlement"),t()(o,"question_withdraw","guess_image/cash_price"),t()(o,"question_coupons","guess_image/coupon_count"),t()(o,"question_answer_list","guess_image/answer_list"),t()(o,"question_all_rewards","guess_image/all_rewards"),t()(o,"question_ranking","guess_image/world_ranking"),t()(o,"question_friend_ranking","guess_image/friend_ranking"),t()(o,"question_invite_info","guess_image/invite_friend"),t()(o,"question_add_friend","guess_image/add_friend"),t()(o,"question_friend_list","guess_image/friend_list"),t()(o,"question_guess_friend","guess_image/may_friend_list"),t()(o,"question_steal_bonus","guess_image/steal_bouns"),t()(o,"question_steal_list","guess_image/steal_my_money"),t()(o,"question_steal_record","guess_image/steal_bouns_record"),t()(o,"question_play_count","guess_image/play_count"),t()(o,"question_wxa_poster","guess_image/wxa_poster"),t()(o,"question_withdraw_cash","guess_image/cash_money"),t()(o,"question_reward_message","guess_image/reward_message"),t()(o,"question_friend_notice","guess_image/new_friend_info"),t()(o,"question_share","guess_image/is_share"),t()(o,"question_index_poster","guess_image/wx_index_poster"),t()(o,"question_need_invite","guess_image/invite_friend_record"),t()(o,"run_env","run_env/wxa"),t()(o,"market_master_activity_double","market/master_activity/double"),t()(o,"market_master_activity_return","market/master_activity/return"),t()(o,"market_coupons_activity_double","market/coupons_activity/double"),t()(o,"market_coupons_activity_return","market/coupons_activity/return"),t()(o,"market_coupons_activity_grant","market/coupons_activity/grant"),o),a={data:function(){return{activeName:"lifeStore",highPickAdv:{}}},created:function(){this.getProduct()},methods:{handleClick:function(e,s){},getProduct:function(){var e=this;console.log(123),this.$axios.get(i.banners_handpick,{}).then(function(s){console.log(s),200==s.status.code?e.highPickAdv=s.data:alert(s.status.message)})}}},n={render:function(){var e=this,s=e.$createElement,r=e._self._c||s;return r("div",{staticClass:"container index-page"},[r("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(s){e.activeName=s},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"生活馆",name:"lifeStore"}}),e._v(" "),r("el-tab-pane",{attrs:{label:"精选",name:"pick"}},[r("el-carousel",{attrs:{interval:4e3,type:"card",height:"200px"}},e._l(e.highPickAdv.banner_images,function(e){return r("el-carousel-item",{key:e},[r("img",{attrs:{src:e.image}})])}),1)],1),e._v(" "),r("el-tab-pane",{attrs:{label:"探索",name:"explore"}},[e._v("生")])],1),e._v("heheh\n  "),e._v(" "),r("loading-page",{attrs:{isShow:!0,time:1e3}}),e._v(" "),r("tabbar")],1)},staticRenderFns:[]};var c=r("C7Lr")(a,n,!1,function(e){r("jTzZ")},"data-v-4f4f11f8",null);s.default=c.exports},jTzZ:function(e,s){}});
//# sourceMappingURL=2.56c73139a0bf7d66c7c9.js.map