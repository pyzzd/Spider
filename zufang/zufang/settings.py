# -*- coding: utf-8 -*-

# Scrapy settings for zufang project
#
# For simplicity, this file contains only settings considered important or
# commonly used. You can find more settings consulting the documentation:
#
#     https://doc.scrapy.org/en/latest/topics/settings.html
#     https://doc.scrapy.org/en/latest/topics/downloader-middleware.html
#     https://doc.scrapy.org/en/latest/topics/spider-middleware.html

BOT_NAME = 'zufang'
SPIDER_MODULES = ['zufang.spiders']
NEWSPIDER_MODULE = 'zufang.spiders'

# Crawl responsibly by identifying yourself (and your website) on the user-agent
#USER_AGENT = 'zufang (+http://www.yourdomain.com)'

# Obey robots.txt rules
ROBOTSTXT_OBEY = False

# Configure maximum concurrent requests performed by Scrapy (default: 16)
CONCURRENT_REQUESTS = 32

# Configure a delay for requests for the same website (default: 0)
# See https://doc.scrapy.org/en/latest/topics/settings.html#download-delay
# See also autothrottle settings and docs
DOWNLOAD_DELAY = 3
# The download delay setting will honor only one of:
#CONCURRENT_REQUESTS_PER_DOMAIN = 16
#CONCURRENT_REQUESTS_PER_IP = 16

# Disable cookies (enabled by default)
#COOKIES_ENABLED = False

# Disable Telnet Console (enabled by default)
#TELNETCONSOLE_ENABLED = False

# Override the default request headers:
# DEFAULT_REQUEST_HEADERS = {
#   'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
#    'Cookie':'id58=SIQxu18MWcyNeH7uIzPW5Q==; 58tj_uuid=e8759370-8d41-406b-a131-1ca67912d386; wmda_uuid=d65afec21296bae01ed109813a174dab; xxzl_deviceid=vkWT%2FTPAI9qL44bGv8ZSTtEmgiYUPkhThmRt%2F7TQKf%2BdeNFUaDZ6kZ%2Bb3ZF%2FkC59; als=0; param8616=0; param8716kop=1; wmda_visited_projects=%3B11187958619315%3B1731916484865%3B10104579731767%3B1731918550401; gr_user_id=33dfa75a-75bc-41f6-8d83-269af0eafd70; bj58_id58s="eU9EN3RsbEU5SHQyNTY2Mw=="; bj58_new_uv=2; new_uv=3; spm=; utm_source=; init_refer=; wmda_session_id_11187958619315=1656664407718-74f2055b-c3e5-f9c0; new_session=0; 58home=wh; city=wh; xxzl_cid=d602e9e12a5d48e8b23e40f5916d57b1; xzuid=98e7fb51-e3dc-489e-95ad-63a3da566c42; www58com="UserID=56485546444053&UserName=ptc9bxiu5"; 58cooper="userid=56485546444053&username=ptc9bxiu5"; 58uname=ptc9bxiu5; passportAccount="atype=0&bstate=0"; xxzl_smartid=132b26673b33bdd626c7cf07ba9c58a0; ppStore_fingerprint=AE5C0FA58C9556B933B4DD20EA9F6658731B8A6117C825C0%EF%BC%BF1656668698905; PPU=UID=56485546444053&UN=ptc9bxiu5&TT=673d9055e88e314c2bbe854bfe8eb2e2&PBODY=hv4DdYmPNHbFUwkrzJLrbIuWzjrUzR6_IhZIyXD5wc9m6Q6vmqawdcfG1hV3vFcyQa3p8gYhSfcIwOjs9aXD0jxoIubHrer2TiVyMJ6CnNQdvDsXAvcOUCFmMb2k_olRSre-9G1e9Joq_DULfGYLAsaZdu3XvbkGtIICNwXUl-w&VER=1&CUID=kwXrSny60XTwheWbHrfBAA'
# }

# Enable or disable spider middlewares
# See https://doc.scrapy.org/en/latest/topics/spider-middleware.html
#SPIDER_MIDDLEWARES = {
#    'zufang.middlewares.ZufangSpiderMiddleware': 543,
#}

# Enable or disable downloader middlewares
# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html
#DOWNLOADER_MIDDLEWARES = {
#    'zufang.middlewares.ZufangDownloaderMiddleware': 543,
#}

# Enable or disable extensions
# See https://doc.scrapy.org/en/latest/topics/extensions.html
#EXTENSIONS = {
#    'scrapy.extensions.telnet.TelnetConsole': None,
#}

# Configure item pipelines
# See https://doc.scrapy.org/en/latest/topics/item-pipeline.html
ITEM_PIPELINES = {
   'zufang.pipelines.ZufangPipeline': 300,
}

# Enable and configure the AutoThrottle extension (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/autothrottle.html
#AUTOTHROTTLE_ENABLED = True
# The initial download delay
#AUTOTHROTTLE_START_DELAY = 5
# The maximum download delay to be set in case of high latencies
#AUTOTHROTTLE_MAX_DELAY = 60
# The average number of requests Scrapy should be sending in parallel to
# each remote server
#AUTOTHROTTLE_TARGET_CONCURRENCY = 1.0
# Enable showing throttling stats for every response received:
#AUTOTHROTTLE_DEBUG = False

# Enable and configure HTTP caching (disabled by default)
# See https://doc.scrapy.org/en/latest/topics/downloader-middleware.html#httpcache-middleware-settings
#HTTPCACHE_ENABLED = True
#HTTPCACHE_EXPIRATION_SECS = 0
#HTTPCACHE_DIR = 'httpcache'
#HTTPCACHE_IGNORE_HTTP_CODES = []
#HTTPCACHE_STORAGE = 'scrapy.extensions.httpcache.FilesystemCacheStorage'
