const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const PORT = process.env.PORT || 5000

require('./db/mongoose')
require('./services/cache')

const ui = require('./routes/ui')
const adminRouter = require('./routes/admin')
const adminCTARouter = require('./routes/admin/activities/cta')
const adminTestimonialsRouter = require('./routes/admin/activities/testimonials')
const adminCategoriesRouter = require('./routes/admin/activities/categories')
const adminImagesRouter = require('./routes/admin/activities/images')
const adminTeamRouter = require('./routes/admin/activities/team')
const {router: adminUploadsRouter} = require('./routes/admin/activities/uploads')
const adminBlogRouter = require('./routes/admin/activities/blogs')

const logger = require('./services/logger')

app.use((req, res, next) => {
    console.log(req.url, Date.now())
    next()
})

app.use(cors())
app.use(express.json())

app.use('/ui', ui)
app.use('/admin', adminRouter)
app.use('/admin/activities/cta', adminCTARouter)
app.use('/admin/activities/testimonials', adminTestimonialsRouter)
app.use('/admin/activities/categories', adminCategoriesRouter)
app.use('/admin/activities/images', adminImagesRouter)
app.use('/admin/activities/team', adminTeamRouter)
app.use('/admin/activities/uploads', adminUploadsRouter)
app.use('/admin/activities/blogs', adminBlogRouter)

if (['production'].includes(process.env.NODE_ENV)) {
    app.use(express.static('client/build'));
  
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve('client', 'build', 'index.html'));
    });
}

app.listen(PORT , () => {
    console.log(`App listening on PORT ${PORT}`)
})