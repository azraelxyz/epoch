test_site_path = /tmp/gae_test_site

run:
	rm -rf $(test_site_path)
	cp -r ./ $(test_site_path)
	dev_appserver.py --log_level debug $(test_site_path)

