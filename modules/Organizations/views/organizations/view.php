<?php

use yii\helpers\Html;
use yii\widgets\DetailView;

/* @var $this yii\web\View */
/* @var $model app\modules\Organizations\models\Organizations */

$this->title = $model->name;
$this->params['breadcrumbs'][] = ['label' => 'Organizations', 'url' => ['index']];
$this->params['breadcrumbs'][] = $this->title;
?>
<div class="organizations-view">

    <h1><?= Html::encode($this->title) ?></h1>

    <p>
        <?= Html::a('Update', ['update', 'inn' => $model->inn, 'kpp' => $model->kpp], ['class' => 'btn btn-primary']) ?>
        <?= Html::a('Delete', ['delete', 'inn' => $model->inn, 'kpp' => $model->kpp], [
            'class' => 'btn btn-danger',
            'data' => [
                'confirm' => 'Are you sure you want to delete this item?',
                'method' => 'post',
            ],
        ]) ?>
    </p>

    <?= DetailView::widget([
        'model' => $model,
        'attributes' => [
            'name',
            'type_id',
            'created_at',
            'inn',
            'kpp',
            'fone_number',
            'e_mail',
        ],
    ]) ?>

</div>
