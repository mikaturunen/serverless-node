# Defines Vagrant environment for testing

Vagrant.configure("2") do |config|

	# Spin up a master machine for installing master to it
	config.vm.define :server do |mgmt_config|
		mgmt_config.vm.box = "ubuntu/trusty64"
		mgmt_config.vm.hostname = "server"
		mgmt_config.vm.network :private_network, ip: "10.0.15.10"
		mgmt_config.vm.provider "virtualbox" do |vb|
			vb.name   = "serverless-server"
			vb.memory = "256"
		end
		# mgmt_config.vm.provision :shell, path: "bootstrap-mgmt.sh"
	end

	# Spin up some client servers so we can test the client deployments
	# https://docs.vagrantup.com/v2/vagrantfile/tips.html
	(1..2).each do |i|
		config.vm.define "client#{i}" do |node|
			node.vm.box = "ubuntu/trusty64"
			node.vm.hostname = "client#{i}"
			node.vm.network :private_network, ip: "10.0.15.2#{i}"
			node.vm.network "forwarded_port", guest: 80, host: "808#{i}"
			node.vm.provider "virtualbox" do |vb|
				vb.name   = "serverless-client-#{i}"
				vb.memory = "256"
			end
		end
	end

end
