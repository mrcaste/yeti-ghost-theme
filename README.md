#Yeti Ghost Theme
Theme minimalist for [Ghost](http://github.com/tryghost/ghost/) based on Yeti [Bootswath theme](https://bootswatch.com/yeti/).

You can find a live example [here](http://mariocaste.com/).
![Example](http://i65.tinypic.com/muh18l.jpg)

#Features
* [Boostrap](https://getbootstrap.com/) 3.3.7
* [Font Awezome](http://fontawesome.io/) 4.6.3
* Pure CSS (based on [Casper Theme](https://github.com/TryGhost/Casper))
* Fully responsive
* Design clean
* Easy to customize

#Installation
* Read the article [How to Install a Ghost Theme](https://www.ghostforbeginners.com/how-to-install-a-ghost-theme)
* Download [here](https://github.com/mrcaste/yeti-ghost-theme/archive/master.zip) or clone it on ghost's theme directory
* Don't forget restart ghost

#Customization
You can customize some features:

##Add Google Analytics
Add your code script to **partial/google_analytics.hbs**.

##Add Social links
Add your links to **partial/social_links.hbs**. You can add or delete your links with FontAwezome icons.
```HTML
<li><a href="https://github.com/USERNAME" target="_blank"><i class="fa fa-github fa-3x"></i></a></li>
```

##Add Disqus
Add your code script to **partial/disqus.hbs**. You can add comments count adding the code script to **partials/disqus_count.hbs** file.

##Add Contact Form
Add the form script to **partial/google_analytics.hbs**. You can create one in [Wufoo](http://www.wufoo.com/).

##Customize Footer
Add your code o social links to **partial/footer.hbs**.

#TODO
* Add code syntax support
* Add search support
* Add subscribe feature

#####Copyright & License
Copyright (c) 2016 Mario Castellanos - Released under the [MIT license](https://github.com/macawws/BlackParrot/blob/master/LICENSE).

