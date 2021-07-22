function calculate(){
                var call = parseInt(document.getElementById("call").value);
                var sms = parseInt(document.getElementById("sms").value);
                var call_price = 0.00;
                var sms_price = 0.00;
                if(call <= 50)
                    call_price = 0.5 * call;
                else if(call <= 150)
                    call_price = 25 + (0.7 * (call - 50));
                else if(call <= 300)
                    call_price = 95 + (0.85 * (call - 150));
                else
                    call_price = 222.5 + (0.95 * (call - 300));

                if(sms <= 50)
                    sms_price = 0.00;
                else if(sms <= 200)
                    sms_price = 0.25 * (sms - 50);
                else if(sms <= 400)
                    sms_price = 37.5 + (0.4 * (sms - 200));
                else
                    sms_price = 117.5 + (0.45 * (sms - 400));

                alert("Charges for call: "+ call_price +"\nCharges for SMS: "+ sms_price +"\nTotal Charges: "+ (call_price+sms_price));
            }