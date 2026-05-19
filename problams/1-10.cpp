Q1. Find the sum of all elements in an array
#include <bits/stdc++.h>
using namespace std;

int main() {
   
   int arr[]={10,20,30,40};
   int sum=0;
   int n=sizeof(arr)/sizeof(arr[0]);
   for(int i=0;i<n;i++){
       sum=sum+arr[i];
   }
    cout<<sum;
}
Q2. Find the largest number in an array
  #include <bits/stdc++.h>
using namespace std;

int main() {
   
   int arr[]={12, 45, 7, 89, 23};
    int min=INT_MIN;
   int n=sizeof(arr)/sizeof(arr[0]);
   for(int i=0;i<n;i++){
        if(arr[i]>min){
        min=arr[i];
   }
   }
cout<<min;
 return 0;
}

Q:3 Find the smallest number in an array
#include <bits/stdc++.h>
using namespace std;

int main() {
   
   int arr[]={12, 45, 7, 89, 23};
    int min=INT_MAX;
     int n=sizeof(arr)/sizeof(arr[0]);
      
     
     for(int i=0;i<n;i++){
         if(min>arr[i]){
             min=arr[i];
         }
     }
      cout<<min;
} 

 Q  find second largest number of array
 #include <bits/stdc++.h>
using namespace std;
 int main() {
   
   int arr[]={12, 45, 7, 89, 23};
    int min=INT_MIN;
     int sl=INT_MIN;
     int n=sizeof(arr)/sizeof(arr[0]);
      
     
     for(int i=0;i<n;i++){
         if(min<arr[i]){
             sl=min;
             min=arr[i];
         }
          else if(arr[i]>sl && arr[i]!=min){
              sl=arr[i];
          }
     }
      cout<<sl;
}
 

 Q find the sl largest number of array 
 #include <bits/stdc++.h>
 using namespace std;

 int main() {
      int arr[]={12, 45, 7, 89, 23};
       int largest=INT_MAX;
       int sllargest=INT_MAX;
        int n= sizeof(arr)/sizeof(arr[0]);
       for(int i=0;i<n;i++){
          if(largest>arr[i]){
             sllargest=largest;
             largest=arr[i];
          }else if( arr[i]<sllargest &&  arr[i]!=largest){
            sllargest=arr[i];
          }
       }
        cout<<sllargest;
 }
   


 
   