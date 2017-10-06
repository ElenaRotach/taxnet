<?php

use yii\db\Migration;

class m171004_194708_migrate extends Migration
{
    public function up()
    {
        $tableOptions = null;
        if ($this->db->driverName === 'mysql') {
            $tableOptions = 'CHARACTER SET utf8 COLLATE utf8_general_ci ENGINE=InnoDB';
        }
        $this->createTable('{{%organizations}}', [
            'name' => $this->string()->notNull(),
            'type_id' => $this->integer()->notNull(),
            'created_at' => $this->integer()->notNull(),
            'inn' => $this->string()->notNull(),
            'kpp' => $this->string()->notNull(),
            'fone_number' => $this->string(),
            'e_mail' => $this->string()
        ], $tableOptions);
        $this->addPrimaryKey('organizations_pk', 'organizations', ['inn', 'kpp']);
    }

    public function down()
    {
        $this->dropTable('{{%organizations}}');

    }

    /*
    // Use up()/down() to run migration code without a transaction.
    public function up()
    {

    }

    public function down()
    {
        echo "m171004_194708_migrate cannot be reverted.\n";

        return false;
    }
    */
}
