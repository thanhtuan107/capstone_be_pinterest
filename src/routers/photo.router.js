import express from 'express';
import photoController from '../controllers/photo.controller';
import protect from '../common/middleware/protect.middleware';
import uploadCloud from '../common/multer/cloud.multer';

const photoRouter = express.Router();

// Tạo route CRUD

photoRouter.post('/upload-images',protect,uploadCloud.single("avatar"), photoController.create);

photoRouter.get('/pagination',protect, photoController.findAll);
photoRouter.get('/:id', photoController.findOne);
photoRouter.get('/:id/like', photoController.getLike);

photoRouter.delete('/:id',protect, photoController.remove);
photoRouter.post('/:id/save',protect,photoController.saveImage)
photoRouter.delete('/:id/save',protect,photoController.unSaveImage)


export default photoRouter;