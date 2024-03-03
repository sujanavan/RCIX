var url = "https://proxy.nanos.cc/proxy/?action=account_history&account=<<DESTINATION_or_SERVICE_PROVIDER's_WALLET_ADDRESS>>&count=1";

function setup() {
	var http = new RealHTTPClient();
	
	// when receiving data
	http.onDone = function(status, data) {
		Serial.println("status: " + status);
		Serial.println("data: " + data);
		
		var a=JSON.parse(data);
		Serial.println("a: " + a.history[0].amount);
		if(a.history[0].amount=="1000000000000000000000000" && a.history[0].account=="<<SOURCE_or_CLIENT's_WALLET_ADDRESS>>")
		{
			digitalWrite(1, HIGH);	
		}
		else
		{
			digitalWrite(1, LOW);
		}	
	};
	
	http.get(url);
}
