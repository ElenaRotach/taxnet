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
class Organizations extends \yii\db\ActiveRecord
{
    /**
     * @inheritdoc
     */
    public static function tableName()
    {
        return '{{%organizations}}';
    }

    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'type_id', 'created_at', 'inn', 'kpp'], 'required'],
            [['type_id', 'created_at'], 'integer'],
            [['name', 'inn', 'fone_number', 'e_mail'], 'string', 'max' => 255],
            [['kpp'], 'string', 'max' => 1],
        ];
    }

    /**
     * @inheritdoc
     */
    public function attributeLabels()
    {
        return [
            'name' => 'Name',
            'type_id' => 'Type ID',
            'created_at' => 'Created At',
            'inn' => 'Inn',
            'kpp' => 'Kpp',
            'fone_number' => 'Fone Number',
            'e_mail' => 'E Mail',
        ];
    }
}
