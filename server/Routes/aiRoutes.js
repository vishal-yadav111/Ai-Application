import express from 'express';
import { auth } from '../middlewares/auth.js';
import { generateArticle, generateBlogTitles, generateImage, RemoveImageBackground, 
RemoveImageObject, ResumeReview } from '../controllers/aicontroller.js';
import { upload } from '../configs/multer.js';

const aiRouter  = express.Router();

aiRouter.post('/generate-article' , auth, generateArticle)
aiRouter.post('/generate-blog-title' , auth, generateBlogTitles)
aiRouter.post('/generate-image' , auth, generateImage)
aiRouter.post('/remove-image-background' , upload.single('image'),auth, RemoveImageBackground)
aiRouter.post('/remove-image-object' , upload.single('image'),auth, RemoveImageObject)
aiRouter.post('/resume-review' , upload.single('resume'),auth, ResumeReview)

export default aiRouter;


