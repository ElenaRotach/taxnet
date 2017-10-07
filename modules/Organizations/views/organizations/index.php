<?php

use yii\helpers\Html;
use yii\grid\GridView;
use app\assets\OrganizationsAsset;

/* @var $this yii\web\View */
/* @var $searchModel app\modules\Organizations\models\OrganizationsSearch */
/* @var $dataProvider yii\data\ActiveDataProvider */

$this->title = 'Организации';
//$this->params['breadcrumbs'][] = $this->title;

OrganizationsAsset::register($this);
?>
<div class="organizations-index" xmlns="http://www.w3.org/1999/html">

    <h1><?= Html::encode($this->title) ?></h1>

    <div id="test"></div>
    <!--<?php // echo $this->render('_search', ['model' => $searchModel]); ?>

    <p>
        <?= Html::a('Create Organizations', ['create'], ['class' => 'btn btn-success']) ?>
    </p>
-->
</div>
<!--<section class="section-content">-->
<div class="col-xs-6 right-aside" id ="menu">

</div>
<div class="data col-xs-18" style="border: 1px solid #008ed0; overflow-x: auto;" id="content_data">

</div>
<!--</section>-->
<script type="text/babel" src="/js/organizations.jsx"></script>