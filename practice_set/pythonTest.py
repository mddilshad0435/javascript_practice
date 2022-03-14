


# arr = ['d','o','g']
# print(arr)
# start=0
# end=len(arr)-1
# def reverseArray(arr,start,end):
#     while start<end:
#         # temp = arr[start]
#         # arr[start] = arr[end]
#         # arr[end] = temp
#         arr[start],arr[end] = arr[end],arr[start]
#         start +=1
#         end -=1

# def recursion(arr,start,end):
#     if start>=end:
#         return
#     arr[start],arr[end] = arr[end],arr[start]
#     recursion(arr,start+1,end-1)


# #reverseArray(arr,start,end)
# recursion(arr,start,end)
# print(arr)

# def shiftall(arr,l):
#    j=0
#    for i in range(0,l):
#        if arr[i]<0:
#            arr[i],arr[j] = arr[j],arr[i]
#            j=j+1
  
  
# # Driver Code
# if __name__ == "__main__":
#   arr=[-12, -11, -13, -5, 6, -7, -5, -3, 11]
#   n=len(arr)-1
#   shiftall(arr,n)
#   print(arr)



arr = [6,8,4,2,1,9,5]
l = len(arr)
def bubbleSort(arr,l):
    for i in range(l):
        for j in range(0,l-i):
            if (arr[j]>arr[j+1]):
                arr[j],arr[j+1] = arr[j+1],arr[j]
            

def insertionSort(arr,l):

    for i in range(1,l+1):
        key = arr[i]
        j = i-1
        while j >= 0 and key <arr[j]:
            arr[j+1] = arr[j]
            j -= 1
        arr[j+1] = key

def selectionSort(arr,l):
    for i in range(l):
        index = i
        for j in range(i+1,l):
            if (arr[index]>arr[j]):
                index = j
        arr[i],arr[index] = arr[index],arr[i]



#bubbleSort(arr,l)

#insertionSort(arr,l)
#selectionSort(arr,l)
#print(arr)

#binary search
# def binarySearch(arr,first,last,key):
#     mid = (first+last)//2
#     while (first<=last):
#         if(arr[mid]<key):
#             first = mid + 1
#         elif (arr[mid]==key):
#             print("key found at ",mid,"index")
#             break
#         else:
#             last=mid-1
#         mid = (first+last)//2
#     if (first>last):
#         print("element not in array")

# arr = list(input("enter the list element :"))
# #arr = [int(i) for i in arr]
# #arr = list(map(int,arr))
# print(type(arr))
# last = len(arr)
# #key = int(input("enter key element :"))
# key = input("enter key ,")
# binarySearch(arr,0,last,key)



day = set(('a','b','c'))
day.add('d')
day.update('e','f')
day.discard('b')
print(day)
print(type(day))
