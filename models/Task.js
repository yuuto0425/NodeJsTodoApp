const mongoose = require("mongoose");
const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "タスク名を入れてください"],
    trim:true,
    maxlength:[20,"タスク名は20文字以内で入力してください。"]
  },
  completed: {
    type:Boolean,
    default:false,
  }
  //idはmongoDBでデータを作成すると、自動的に生成されるため必要ない。
});


module.exports = mongoose.model("Task",TaskSchema);