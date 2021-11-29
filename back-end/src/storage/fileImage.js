const multer = require('multer');

exports.fileStorage = multer.diskStorage({
	destination: (req, file, cb) => {
		// Mengatur nama folder yag akan dijadikan path
		cb(null, 'image')
	},
	filename: (req,file,cb) => {
		cb(null, new Date().getTime() + "-" + file.originalname)
	}
});

exports.filterFile = (req, file, cb) => {
	if(file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
		cb(null, true);
	}else {
		cb(null, false)
	}
}
