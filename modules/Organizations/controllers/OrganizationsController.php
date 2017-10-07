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
        /*$data = "";
        if(Yii::$app->request->isGET ) {
            //$postquery = Yii::$app->request->get();
            $organizations = Organizations::find()->asArray()->all();
            $data = Json::encode($organizations);
        }
        return $data;*/
        /*$searchModel = new OrganizationsSearch();
        $dataProvider = $searchModel->search(Yii::$app->request->queryParams);
*/
        return $this->render('index');/*, [
            'searchModel' => $searchModel,
            'dataProvider' => $dataProvider,
        ]);*/

    }

    /**
     * Displays a single Organizations model.
     * @param string $inn
     * @param string $kpp
     * @return mixed
     */
    public function actionView($inn, $kpp)
    {
        return $this->render('view', [
            'model' => $this->findModel($inn, $kpp),
        ]);
    }

    /**
     * Creates a new Organizations model.
     * If creation is successful, the browser will be redirected to the 'view' page.
     * @return mixed
     */
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

    public function actionAll(){

        if(Yii::$app->request->isGet){
            $request = Yii::$app->request->get();
            $count = Organizations::find()->all();
            $count = ceil(count($count)/10);
            $portion = $request['portion'];
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
    /**
     * Updates an existing Organizations model.
     * If update is successful, the browser will be redirected to the 'view' page.
     * @param string $inn
     * @param string $kpp
     * @return mixed
     */
    public function actionUpdate()
    {
        //$model = new Organizations();
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

    /**
     * Deletes an existing Organizations model.
     * If deletion is successful, the browser will be redirected to the 'index' page.
     * @param string $inn
     * @param string $kpp
     * @return mixed
     */
    public function actionDelete($inn, $kpp)
    {
        $this->findModel($inn, $kpp)->delete();

        return $this->redirect(['index']);
    }

    /**
     * Finds the Organizations model based on its primary key value.
     * If the model is not found, a 404 HTTP exception will be thrown.
     * @param string $inn
     * @param string $kpp
     * @return Organizations the loaded model
     * @throws NotFoundHttpException if the model cannot be found
     */
    protected function findModel($inn, $kpp)
    {
        if (($model = Organizations::findOne(['inn' => $inn, 'kpp' => $kpp])) !== null) {
            return $model;
        } else {
            throw new NotFoundHttpException('The requested page does not exist.');
        }
    }
}
