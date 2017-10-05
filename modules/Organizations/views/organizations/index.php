<?php

use yii\helpers\Html;
use yii\grid\GridView;
use app\assets\OrganizationsAsset;

/* @var $this yii\web\View */
/* @var $searchModel app\modules\Organizations\models\OrganizationsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Organizations';
$this->params['breadcrumbs'][] = $this->title;

OrganizationsAsset::register($this);
?>
<div class="organizations-index">
<div id="test"></div>
    <h1><?= Html::encode($this->title) ?></h1>
    <?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Organizations', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
    <?= GridView::widget([
        'dataProvider' => $dataProvider,
        'filterModel' => $searchModel,
        'columns' => [
            ['class' => 'yii\grid\SerialColumn'],

            'name',
            'type_id',
            'created_at',
            'inn',
            'kpp',
            // 'fone_number',
            // 'e_mail',

            ['class' => 'yii\grid\ActionColumn'],
        ],
    ]); ?>
</div>

<script type="text/babel" src="/js/organizations.jsx"></script>