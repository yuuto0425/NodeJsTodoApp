const  express = require("express");
const router =  express.Router();
const  {
    getAllTasks,
    createTasks,
    getSingleTasks,
    updateTasks,
    deleteTasks,
} = require("../controllers/tasks");

//取得メソッド
router.get("/", getAllTasks);
//作成メソッド
router.post("/",createTasks );
//取得メソッド
router.get("/:id", getSingleTasks);
//更新メソッド
router.patch("/:id",updateTasks);
//削除メソッド
router.delete("/:id",deleteTasks);


module.exports = router;
//routerをエクスポート