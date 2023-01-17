import {Router} from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController'
const router=Router();


//routs pagesController->
router.get('/', PageController.home)
router.get('/dogs', PageController.dogs);
router.get('/cats', PageController.cats);
router.get('/fishes', PageController.fishes);

//routs searchController

router.get('/search',SearchController.search);





 export default router;