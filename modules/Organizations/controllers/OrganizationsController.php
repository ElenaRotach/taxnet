<?php

namespace app\modules\Organizations\controllers;

use app\modules\Organizations\models\OrganizationsType;
use function GuzzleHttp\Psr7\str;
use Yii;
use app\modules\Organizations\models\Organizations;
use app\modules\Organizations\models\OrganizationsSearch;
use yii\db\Query;
use yii\helpers\Json;
use yii\web\Controller;
use yii\web\NotFoundHttpException;
use yii\filters\VerbFilter;

/**
 * OrganizationsController implements the CRUD actions for Organizations model.
 */
class OrganizationsController extends Controller
{
    /**
     * @inheritdoc
     */
    public function behaviors()
    {
        return [
            'verbs' => [
                'class' => VerbFilter::className(),
                'actions' => [
                    'delete' => ['POST'],
                ],
            ],
        ];
    }

    /**
     * Lists all Organizations models.
     * @return mixed
     */
    public function actionIndex()
    {
        return $this->render('index');
    }


    public function actionView($inn, $kpp)
    {
        return $this->render('view', [
            'model' => $this->findModel($inn, $kpp),
        ]);
    }


    public function actionCreate()
    {
        $model = new Organizations();
        if(Yii::$app->request->isPost){
            $request = Yii::$app->request->post();
            $type = 1;
            if(Yii::$app->request->post()['type']=="Индивидуальный предприниматель"){
                $type = 2;
            }
            if($type==1){
                if(strlen($request['inn'])!=10 || strlen($request['kpp'])!=9){
                    return 0;
                }
            }else{
                if(strlen($request['inn'])!=12 || $request['kpp']!=0){
                    return 0;
                }
            }

            $model->name = $request['name'];
            $model->type_id = $type;
            $model->created_at = (new \DateTime())->getTimestamp();
            $model->inn = $request['inn'];
            $model->kpp = $request['kpp'];
            $model->fone_number = $request['tel'];
            $model->e_mail = $request['mail'];
            //return Json::encode($model);
            $rez = $model->save();
        }

       return $rez;
    }


    public function actionAll()
    {
        if(Yii::$app->request->isGet){
            $request = Yii::$app->request->get();
            $count = Organizations::find()->all();
            $count = ceil(count($count)/10);
            $portion = $request['portion']*10;
            $model=Organizations::find()->offset($portion)->limit(10)->all();
            $rez[0] = $count;
            $rez[1] = $model;
            return Json::encode($rez);
        }

    }


    public function actionTypes(){
        if(Yii::$app->request->isGet) {
            $request = Yii::$app->request->get();
            //return $request['type'];
            $model = OrganizationsType::find()->select('short_name')->where(['id'=>$request['type']])->asArray()->one();
            return Json::encode($model);
        }
    }


    public function actionUpdate()
    {
        if(Yii::$app->request->isPost){
            $request = Yii::$app->request->post();
            $type = 1;
            if(Yii::$app->request->post()['type']=="Индивидуальный предприниматель"){
                $type = 2;
            }
            if($type==1){
                if(strlen($request['inn'])!=10 || strlen($request['kpp'])!=9){
                    return 0;
                }
            }else{
                if(strlen($request['inn'])!=12 || $request['kpp']!=0){
                    return 0;
                }
            }

            $model = Organizations::find()->where(['inn' => $request['inn_old']])->andWhere(['kpp'=>$request['kpp_old']])->one();
            $model->name = $request['name'];
            $model->type_id = $type;
            //$model->created_at = (new \DateTime())->getTimestamp();
            $model->inn = $request['inn'];
            $model->kpp = $request['kpp'];
            $model->fone_number = $request['tel'];
            $model->e_mail = $request['mail'];
            //return Json::encode($model);
            $rez = $model->save();
        }

        return $rez;
    }


    public function actionDelete()
    {
        if(Yii::$app->request->isPost) {
            $request = Yii::$app->request->post();
            $rez = $this->findModel($request['inn'], $request['kpp'])->delete();

            return $rez;
        }
    }


    protected function findModel($inn, $kpp)
    {
        if (($model = Organizations::findOne(['inn' => $inn, 'kpp' => $kpp])) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
