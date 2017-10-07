<?php

namespace app\modules\Organizations\models;

use Yii;

/**
 * This is the model class for table "{{%organizations}}".
 *
 * @property string $name
 * @property integer $type_id
 * @property integer $created_at
 * @property string $inn
 * @property string $kpp
 * @property string $fone_number
 * @property string $e_mail
 */
class OrganizationsType extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%organizations_type}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'id', 'short_name'], 'required'],
            [['id'], 'integer'],
            [['name', 'short_name'], 'string', 'max' => 255],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'name' => 'Name',
            'short_name' => 'short_name',
            'id' => 'id'
        ];
    }
}
