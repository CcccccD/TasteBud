exports.sql={
    details:"select recipes.name,recipes.cover_pic,recipes.descripe,recipes.cook_times,recipes.collect_times,recipes.create_time,recipes.tips,material.goods,dosage.amount,userinfo.name creater,userinfo.id creater_id from ((recipes  JOIN material ON recipes.id=material.recipe_id) join dosage on recipes.id=dosage.reciper_id and material.id=dosage.id) join userinfo on recipes.creater_id=userinfo.id where recipes.id=?",
    steps:"select steps.description step from recipes JOIN steps ON recipes.id=steps.recipe_id where recipes.id=?",
    IndexMenu:"select recipes.id,recipes.create_time ,recipes.descripe,recipes.name,recipes.cover_pic,recipes.cook_times,recipes.collect_times,userinfo.name creater,userinfo.id user_id from recipes join userinfo on userinfo.id=recipes.creater_id",
    IndexList:'select  r.id,r.name,r.creater_time create_time,r.cover_pic,r.descripe,r.collect_times,u.id creater_id,u.name creater,count(r.id) recipe_numbers from (recipe_list r join userinfo u on r.creater_id=u.id) join addrecipes a on r.id=a.list_id GROUP BY r.id',
    Menudetail:'select r.name,u.user_icon,u2.name recipe_creater,r2.creater_id recipe_creater_id,r2.id, r.descripe,r.collect_times,r.creater_time,u.id creater_id,u.name creater,r2.name recipe_name,r2.cover_pic recipe_pic,r2.descripe recipe_descripe,r2.cook_times from recipe_list r join addrecipes a on r.id=a.list_id join recipes r2 on a.recipe_id=r2.id join userinfo u on r.creater_id =u.id join userinfo u2 on u2.id=r2.creater_id where r.id=? group by recipe_id',
    Menuworks:'select w.cover_pic,w.descripe,w.create_time,u.id creater_id,u.name creater,u.user_icon from works w join recipes r on w.reciper_id = r.id join userinfo u on w.creater_id=u.id where r.id=?',
    MenuLists:'select r2.name list_name,r2.cover_pic cover_pic ,r2.id list_id from recipes r1 join addrecipes a on a.recipe_id =r1.id join recipe_list r2 on r2.id=a.list_id where r1.id=? GROUP BY list_id',
    getClass:'select c.id class_id, c.name class_name,t.name tag_name from category c join tag t on t.category_id = c.id',
    checkCollected:' select count(1) hasCollected from collect_recipe c where c.recipe_id=? && c.collecter_id =?',
    collect_reciper:'insert into collect_recipe(recipe_id,collecter_id) values (?,?)',
    addreciperCol_num:'UPDATE recipes set collect_times = collect_times + 1 where id = ?',
    uncollect_reciper:'DELETE from collect_recipe where recipe_id=? && collecter_id=?',
    delreciperCol_num:'UPDATE recipes set collect_times = collect_times - 1 where id = ?',
    IfcollectList:'select count(1) hasCollected from collect_list c where c.list_id=? && c.user_id =?',
    collect_list:'insert into collect_list(list_id,user_id) values (?,?)',
    addlistCol_num:'UPDATE recipe_list set collect_times = collect_times + 1 where id = ?',
    uncollect_list:'DELETE from collect_list where list_id=? && user_id=?',
    dellistCol_num:'UPDATE recipe_list set collect_times = collect_times - 1 where id = ?',
    UploadRecipe:'insert into recipes(name,cover_pic,descripe,creater_id,create_time,tips)values(?,?,?,?,NOW(),?)',
    UploadMaterial:'insert into material(goods,recipe_id) values(?,?)',
    UploadMaterial_amount:'insert into dosage(reciper_id,amount)values(?,?)',
    UploadSteps:'insert into steps(description,recipe_id)values(?,?)',
    addUserProduction_num:'update userinfo set production_number = production_number + 1 where id=?',
    delRecipefromList:'delete from addrecipes where recipe_id=? && list_id=?',
    addRecipeintoList:'insert into addrecipes(recipe_id,list_id) values(?,?)',

    addRecipe_list:'insert into recipe_list(name,cover_pic,descripe,creater_id,creater_time)values(?,?,?,?,NOW())',
    addPersonalWork:'insert into works (name,cover_pic,reciper_id,descripe,creater_id,create_time) values(?,?,?,?,?,NOW())',
    addRecipeCookNum:'UPDATE recipes set cook_times = cook_times + 1 where id = ?'
}