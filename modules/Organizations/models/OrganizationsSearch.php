<?php

namespace app\modules\Organizations\models;

use Yii;
use yii\base\Model;
use yii\data\ActiveDataProvider;
use app\modules\Organizations\models\Organizations;

/**
 * OrganizationsSearch represents the model behind the search form about `app\modules\Organizations\models\Organizations`.
 */
class OrganizationsSearch extends Organizations
{
    /**
     * @inheritdoc
     */
    public function rules()
    {
        return [
            [['name', 'inn', 'kpp', 'fone_number', 'e_mail'], 'safe'],
            [['type_id', 'created_at'], 'integer'],
        ];
    }

    /**
     * @inheritdoc
     */
    public function scenarios()
    {
        // bypass scenarios() implementation in the parent class
        return Model::scenarios();
    }

    /**
     * Creates data provider instance with search query applied
     *
     * @param array $params
     *
     * @return ActiveDataProvider
     */
    public function search($params)
    {
        $query = Organizations::find();

        // add conditions that should always apply here

        $dataProvider = new ActiveDataProvider([
            'query' => $query,
        ]);

        $this->load($params);

        if (!$this->validate()) {
            // uncomment the following line if you do not want to return any records when validation fails
            // $query->where('0=1');
            return $dataProvider;
        }

        // grid filtering conditions
        $query->andFilterWhere([
            'type_id' => $this->type_id,
            'created_at' => $this->created_at,
        ]);

        $query->andFilterWhere(['like', 'name', $this->name])
            ->andFilterWhere(['like', 'inn', $this->inn])
            ->andFilterWhere(['like', 'kpp', $this->kpp])
            ->andFilterWhere(['like', 'fone_number', $this->fone_number])
            ->andFilterWhere(['like', 'e_mail', $this->e_mail]);

        return $dataProvider;
    }
}
