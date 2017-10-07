<?php

use yii\db\Migration;

class m171007_110418_migrate extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable('{{%organizations_type}}', [
            'id' => $this->primaryKey(),
            'name' => $this->string()->notNull(),
            'short_name' => $this->string()->notNull()
        ], $tableOptions);
    }

    public function down()
    {
        $this->dropTable('{{%organizations_type}}');

    }
}
